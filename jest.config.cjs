module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy', // Para manejar archivos de estilo
      '\\.(svg|jpg|jpeg|png)$': '<rootDir>/__mocks__/fileMock.js'  // Para imágenes

    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Configuración adicional
  };
  