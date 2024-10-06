module.exports = {
  projects: [
    {
      displayName: 'unit',
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/__tests__/**/*.test.ts', '<rootDir>/__tests__/**/*.test.tsx'],
      moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy', 
        '\\.(svg|jpg|jpeg|png)$': '<rootDir>/__mocks__/fileMock.js', 
      },
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    },
    {
      displayName: 'e2e',
      preset: 'jest-puppeteer',
      testEnvironment: 'jest-environment-puppeteer',
      testMatch: ['<rootDir>/e2e/**/*.test.js'], 
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
      maxWorkers: 1,
      maxConcurrency: 1, 
    },
  ],
};
