import wrapRootElement from './gatsby/browser/wrapRootElement'

export { wrapRootElement }

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash) {
    return decodeURIComponent(location.hash.slice(1))
  }

  return true
}
