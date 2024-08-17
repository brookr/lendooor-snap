import type { OnRpcRequestHandler } from '@metamask/snaps-sdk';
import { Box, Text, Bold } from '@metamask/snaps-sdk/jsx';

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}) => {
  switch (request.method) {
    case 'hello':
      return snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: (
            <Box>
              <Text>Connected via {origin}!</Text>
              <Bold>Welcome, Lendooor!</Bold>
              <Text>Are you ready to put your NFTs to work?</Text>
              <Text>This integration is ready to be customized!</Text>
            </Box>
          ),
        },
      });
    default:
      throw new Error('Method not found.');
  }
};
