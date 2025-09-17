// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config([
  // 무시할 파일들
  {
    ignores: ['dist', 'build', 'node_modules', '*.config.js', '*.config.ts', 'vite.config.ts'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // React Hooks 규칙 (필수)
      ...reactHooks.configs.recommended.rules,
      
      // React Refresh 규칙 (필수)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // TypeScript 관련 규칙 완화
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { 
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true 
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/prefer-const': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-empty-function': 'warn',

      // JavaScript 기본 규칙 완화  
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': 'off', // TypeScript 버전 사용
      'no-undef': 'off', // TypeScript에서 체크
      'no-empty': 'warn',
      'no-constant-condition': 'warn',
      'no-unreachable': 'warn',

      // 스타일 관련 규칙 완화
      'prefer-const': 'warn',
      'no-var': 'warn',
      'object-shorthand': 'off',
      'prefer-template': 'off',

      // React 관련 규칙 완화
      'react-hooks/rules-of-hooks': 'error', // 필수
      'react-hooks/exhaustive-deps': 'warn', // 경고로 완화

      // 기타 유용한 규칙들을 경고로 설정
      'eqeqeq': ['warn', 'smart'],
      'no-duplicate-case': 'warn',
      'no-fallthrough': 'warn',
      'no-irregular-whitespace': 'warn',
    },
  },
  // JavaScript 파일에 대한 별도 설정
  {
    files: ['**/*.js'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': [
        'warn',
        { 
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true 
        }
      ],
    },
  },
]);