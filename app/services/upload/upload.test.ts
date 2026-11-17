/**
 * @jest-environment node
 */
import { createAzureStorageService } from '~/services/upload/upload';

describe('demo upload service', () => {
  it('should no-op upload and delete operations', async () => {
    const service = createAzureStorageService();

    await expect(service.uploadFile()).resolves.toBeUndefined();
    await expect(service.deleteFile()).resolves.toBeUndefined();
  });

  it('should redirect to the given demo blob url when streaming', async () => {
    const response = await createAzureStorageService().streamBlob('http://localhost/mock-blob/photos/placeholder.jpg');

    expect(response.status).toBe(302);
    expect(response.headers.get('location')).toBe('http://localhost/mock-blob/photos/placeholder.jpg');
  });
});
