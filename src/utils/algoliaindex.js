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
        return processTagP(child)
      } else if ((child.tagName === "ul") || (child.tagName === "ol")) {
        return child.children.map((grandChild) => (
          (grandChild.tagName === "li") ? processTagP(grandChild) : null
        )).join('\n')
      } else if (child.tagName === "blockquote") {
        return child.children.map((grandChild) => (
          (grandChild.tagName === "p") ? processTagP(grandChild) : null
        )).join('\n')
      } else if ((child.tagName === "h1") || (child.tagName === "h2") || (child.tagName === "h3")) {
        return processTagP(child)
      }
      return null
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
