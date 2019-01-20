const indexQuery = `{
  allMarkdownRemark(filter: {frontmatter: {search: {eq: true}}}) {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
        htmlAst
      }
    }
  }
  blogPages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/src/blog/"}}) {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
        htmlAst
      }
    }
  }
}`

const createParagraphRecords = ({data}) => {
  let nodeListList = data.allMarkdownRemark.edges.concat(data.blogPages.edges)
  nodeListList = nodeListList.map(({node}) => {
    let paragraphs = node.htmlAst.children.filter((child) =>
      ((child.tagName === "p") || (child.tagName === "ul") ||
        (child.tagName === "ol") || (child.tagName === "blockquote") ||
        (child.tagName === "h1") || (child.tagName === "h2") ||
        (child.tagName === "h3"))
    )
    delete node.htmlAst
    let key = 0
    paragraphs = paragraphs.map((child) => {
      if (child.tagName === "p") {
        let values = child.children.map((grandChild) => {
          if(grandChild.type === "text")
            return grandChild.value
          else if(grandChild.type === "element")
            return grandChild.children[0].value
          return null
        })
        let value = values.join('')
        return value
      } else if ((child.tagName === "ul") || (child.tagName === "ol")) {
        let values = child.children.map((grandChild) => {
          if(grandChild.tagName === "li") {
            let childValues = grandChild.children.map((greatGrandChild) => {
              if(greatGrandChild.type === "text")
                return greatGrandChild.value
              else if(greatGrandChild.type === "element")
                return greatGrandChild.children[0].value
              return null
            })
            let childValue = childValues.join('')
            return childValue
          }
          return null
        })
        let value = values.join('\n')
        return value
      } else if (child.tagName === "blockquote") {
        let values = child.children.map((grandChild) => {
          if(grandChild.tagName === "p") {
            let childValues = grandChild.children.map((greatGrandChild) => {
              if(greatGrandChild.type === "text")
                return greatGrandChild.value
              else if(greatGrandChild.type === "element")
                return greatGrandChild.children[0].value
              return null
            })
            let childValue = childValues.join('')
            return childValue
          }
          return null
        })
        let value = values.join('\n')
        return value
      } else if ((child.tagName === "h1") || (child.tagName === "h2") || (child.tagName === "h3")) {
        let values = child.children.map((grandChild) => {
          if(grandChild.type === "text")
            return grandChild.value
          return null
        })
        let value = values.join('\n')
        return value
      }
      return null
    })
    let nodeList = paragraphs.map((para) => {
      let paraRecord = {}
      paraRecord.value = `${para}`
      paraRecord.objectID = node.id + key++
      paraRecord.frontmatter = node.frontmatter
      paraRecord.fields = node.fields
      return paraRecord
    })
    return nodeList
  })
  let list = [].concat.apply([], nodeListList)
  return list
}

const queries = [
  {
    query: indexQuery,
    transformer: createParagraphRecords, // optional
    indexName: 'CHANDRAVEENA', // overrides main index name, optional
  },
]

module.exports = queries
