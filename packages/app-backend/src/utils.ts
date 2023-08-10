import * as platform from 'platform'
export function getPlatformInfo(str) {
  return platform.parse(str)
}
