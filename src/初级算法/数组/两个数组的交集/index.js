/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
const intersection = (nums1, nums2) => {
  const s1 = new Set(nums1)
  const s2 = new Set(nums2)
  return [...s1].filter(x => s2.has(x))
}

module.exports = intersection
