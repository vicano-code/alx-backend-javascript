export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  // Get the current count for the endpoint from the WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the WeakMap with the new count
  weakMap.set(endpoint, count);

  // Check if the count has reached 5 or more
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
