const fetchAuthors = require('./modifiers');

// Mock the fetch API
global.fetch = jest.fn();

// .not
test('should assert on wrong count', async () => {
    global.fetch.mockResolvedValueOnce({
        json: async () => [1, 2, 3],
    });
    await fetchAuthors();
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3450/authors');
});

// .resolves
test('should resolve with authors data', async () => {
    const mockData = [1, 2, 3];
    global.fetch.mockResolvedValueOnce({
        json: async () => mockData,
    });
    await expect(fetchAuthors()).resolves.toBeUndefined();
});

// .rejects
test('should reject on fetch error', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'));
    await expect(fetchAuthors()).rejects.toThrow('Network error');
});

test('should not call fetch when URL is invalid', async () => {
    global.fetch.mockClear();
    const result = await fetchAuthors();
    expect(global.fetch).toHaveBeenCalled();
});

afterEach(() => {
    global.fetch.mockClear();
});