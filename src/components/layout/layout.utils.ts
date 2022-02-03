export const getPagination = (pageContent: any, currentPageId: string) => {
  const paginationData = pageContent.edges.find(
    (item: any) => item.node.fields.id === currentPageId
  )

  return !!paginationData
    ? [paginationData.next, paginationData.previous]
    : [null, null]
}
