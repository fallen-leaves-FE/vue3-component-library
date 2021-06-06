module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json', 'vue'],
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'.+\\.(css|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
		'^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest'
	},
	snapshotSerializers: ['jest-serializer-vue'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/packages/$1'
	},
	testMatch: [
		'<rootDir>/tests/**/*.spec.(js|ts)'
	],
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/packages/**/*.{ts,tsx,js,jsx,vue}'
	]
}
