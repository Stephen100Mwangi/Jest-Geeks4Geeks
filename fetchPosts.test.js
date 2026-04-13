const fetchPostsFunction = require("./fetchPosts");

global.fetch = jest.fn();
// Use this function to avoid calling the real API. If omitted, we get either of these errors 👇
// 💥fetch is not defined (in Node environment)
// OR
// 💥Real HTTP request (bad practice in unit tests)

// Mock fetch() using jest.fn

describe("fetch posts", () => {
  // beforeEach hook - Runs before each test is executed
  beforeEach(() => {
    jest.clearAllMocks();
    // It resets all mock function data between tests.
  });

  // Happy path - Fetch and return posts data
  it("should fetch and return posts data", async () => {
    const mockPosts = [{ userId: "user", userTitle: "Test Post" }];

    fetch.mockResolvedValue({
      status: 200,
      json: jest.fn().mockResolvedValue(mockPosts),
    });

    const result = await fetchPostsFunction();

    expect(fetch).toHaveBeenCalledWith("http://localhost:3400/posts");
    expect(result).toEqual(mockPosts);
  });

  //   Unhappy path - Throw an error when response status is not 500
  it("should throw an error when status is not 200", async () => {
    fetch.mockResolvedValue({
      status: 500,
    });
    await expect(fetchPostsFunction()).rejects.toThrow("Error fetching posts");
  });

  // const postsData = await res.json(); - Line we are verifying
  it("should call res.json()", async () => {
    const mockJson = fetch.mockResolvedValue([]);
    fetch.mockResolvedValue({
      status: 200,
      json: mockJson,
    });
    await fetchPostsFunction();
    expect(mockJson).toHaveBeenCalled();
  });
});
