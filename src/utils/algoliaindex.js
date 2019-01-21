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

const processTagP = (tag) => (
  tag.children.map((childTag) => {
    if(childTag.type === "text")
      return childTag.value
    else if(childTag.type === "element")
      return childTag.children[0].value
    return null
  }).join('')
)

const createParagraphRecords = ({data}) => {
  let records = data.allMarkdownRemark.edges.concat(data.blogPages.edges).map(({node}) => {
    let textNodes = node.htmlAst.children.filter((child) =>
      ((child.tagName === "p") || (child.tagName === "ul") ||
        (child.tagName === "ol") || (child.tagName === "blockquote") ||
        (child.tagName === "h1") || (child.tagName === "h2") ||
        (child.tagName === "h3"))
    )
    delete node.htmlAst
    let key = 0
    let paragraphs = []
    let tempPara = ''
    textNodes.map((child) => {
      if (child.tagName === "p") {
        tempPara = processTagP(child)
        paragraphs.push(tempPara)
      } else if ((child.tagName === "ul") || (child.tagName === "ol")) {
        child.children.map((grandChild) => {
          if (grandChild.tagName === "li") {
            tempPara = processTagP(grandChild)
            paragraphs.push(tempPara)
          }
          return 0
        })
      } else if (child.tagName === "blockquote") {
        child.children.map((grandChild) => {
          if (grandChild.tagName === "p") {
            tempPara = processTagP(grandChild)
            paragraphs.push(tempPara)
          }
          return 0
        })
      } else if ((child.tagName === "h1") || (child.tagName === "h2") || (child.tagName === "h3")) {
        tempPara = processTagP(child)
        paragraphs.push(tempPara)
      }
      return 0
    })
    let record = paragraphs.map((para) => {
      let paraRecord = {}
      paraRecord.value = `${para}`
      paraRecord.objectID = node.id + key++
      paraRecord.frontmatter = node.frontmatter
      paraRecord.fields = node.fields
      return paraRecord
    })
    return record
  })
  return [].concat.apply([], records)
}

const queries = [
  {
    query: indexQuery,
    transformer: createParagraphRecords, // optional
    indexName: 'CHANDRAVEENA', // overrides main index name, optional
  },
]

module.exports = queries
