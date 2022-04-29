import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // 테스트 환경에서 next.config.js 및 .env 파일을 로드하기 위한 Next.js 앱 경로 제공
  dir: './',
})

// Jest에 전달할 사용자 지정 구성 추가 및 테스트를 실행하기 전에 설정 옵션 추가
const customJestConfig = {
  // 루트 디렉터리로 설정된 baseUrl과 함께 TypeScript를 사용하는 경우 alias가 작동하려면 다음이 필요합니다.
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleDirectories: ['<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['cypress'],
}

module.exports = createJestConfig(customJestConfig)
