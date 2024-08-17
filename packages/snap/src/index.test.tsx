import { expect } from '@jest/globals';
import { installSnap } from '@metamask/snaps-jest';
import { Box, Text, Bold } from '@metamask/snaps-sdk/jsx';

describe('onRpcRequest', () => {
  describe('hello', () => {
    it('shows a confirmation dialog', async () => {
      const { request } = await installSnap();

      const origin = 'Jest';
      const response = request({
        method: 'hello',
        origin,
      });

      const ui = await response.getInterface();
      expect(ui.type).toBe('confirmation');
      expect(ui).toRender(
        <Box>
          <Text>Connected via {origin}!</Text>
          <Bold>Welcome, Lendooor!</Bold>
          <Text>Are you ready to put your NFTs to work?</Text>
          <Text>This integration is ready to be customized!</Text>
        </Box>,
      );

      await ui.ok();

      expect(await response).toRespondWith(true);
    });
  });

  it('throws an error if the requested method does not exist', async () => {
    const { request } = await installSnap();

    const response = await request({
      method: 'foo',
    });

    expect(response).toRespondWithError({
      code: -32603,
      message: 'Method not found.',
      stack: expect.any(String),
    });
  });
});
