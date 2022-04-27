# [Create a Typescript NextJS Project with Jest & Cypress](https://wk0.medium.com/create-a-typescript-nextjs-project-with-jest-cypress-adbbcf237747)

**NextJS Typescript 스타터는 훌륭하지만 프로젝트가 성장함에 따라 유용하게 될 도구를 조금 더 추가해 보겠습니다.**

    yarn add -D ts-node prettier jest husky lint-staged eslint-config-prettier eslint-plugin-jest-dom @testing-library/jest-dom @testing-library/react @types/testing-library__jest-dom @types/testing-library__react @typescript-eslint/eslint-plugin

**이러한 패키지는 형식 지정 및 테스트를 위한 좋은 기반을 제공합니다.**

**또한 스크립트 아래에 다음을 추가하여 테스트를 실행합니다(나중을 위한 CI 옵션).**

```js
"scripts": {
    ...
    "test": "jest --watch",
    "test:ci": "jest --ci"
}

```

<br />

**그런 다음 설치한 모든 도구에 대한 몇 가지 구성 파일을 편집합니다.**

`touch jest.config.ts`

```js
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // 테스트 환경에서 next.config.js 및 .env 파일을 로드하기 위한 Next.js 앱 경로 제공
  dir: './',
})

// Jest에 전달할 사용자 지정 구성 추가 및 테스트를 실행하기 전에 설정 옵션 추가
const customJestConfig = {
  // 루트 디렉터리로 설정된 baseUrl과 함께 TypeScript를 사용하는 경우 alias가 작동하려면 다음이 필요합니다.
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvirontment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['cypress'],
}

module.exports = createJestConfig(customJestConfig)
```

<br />

**tsconfig.json 수정 (나중에 추가할 cypress 폴더 제외)**

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "types": ["jest", "node", "@types/testing-library__jest-dom"]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules", "cypress"]
}
```

<br />

**prettier 설정 추가**

`touch .prettierrc.json`

```json
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```

<br />

**eslint 설정 추가**

```json
{
  "plugins": ["@typescript-eslint"],
  "extends": [
    "next/core-web-vitals",
    "plugin:jest-dom/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

<br />

**Huksy 추가**

`yarn husky install`

---

# [Part Two (Add Tailwind)](https://wk0.medium.com/adding-tailwind-to-a-nextjs-typescript-project-d1eba5699c4d)
