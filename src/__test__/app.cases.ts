import { poweredBy } from "hono/powered-by";

type testCasesType = {
  description: string;
  queryParameter: { n : string }
  expectedResponse: { result: number } | { status: number, message: string };
}[]

export const testCases: testCasesType = [
  {
    description: '一般的なケース',
    queryParameter: { n : '5' },
    expectedResponse: { result: 5 }
  },
  {
    description: '0を指定した場合',
    queryParameter: { n : '0' },
    expectedResponse: { status: 400, message: "n must be positive." }
  },
  {
    description: '負の数を指定した場合',
    queryParameter: { n : '-3' },
    expectedResponse: { status: 400, message: "n must be positive." }
  },
  {
    description: '文字列を指定した場合',
    queryParameter: { n : 'HelloWorld!' },
    expectedResponse: { status: 400, message: "n must be a number." }
  },
  {
    description: '大きな数を指定した場合',
    queryParameter: { n : '10' },
    expectedResponse: { result: 55 }
  },
  {
    description: '大きな数を指定した場合',
    queryParameter: { n : '18' },
    expectedResponse: { result: 2584 }
  },
  {
    description: '大きな数を指定した場合',
    queryParameter: { n : '50' },
    expectedResponse: { result: 12586269025 }
  },
  {
    description: '大きな数を指定した場合',
    queryParameter: { n : '100' },
    expectedResponse: { result: 3.5422484817926E+20 }
  },
];