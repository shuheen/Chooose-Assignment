import {setupServer} from 'msw/node';
import {mswHandlers} from './mswHandlers';

// This configures a request mocking server with the given request handlers
export const mswServer = setupServer(...mswHandlers);
