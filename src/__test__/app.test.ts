import app from "../app"
import { testCases } from "./app.cases";


describe.each(testCases)('POST /', (testCase) => {
  it(testCase.description, async () => {
    const res = await app.request(`/fib?n=${testCase.queryParameter.n}`, {
      method: 'GET',
    });
    expect(JSON.parse(await res.text())).toEqual(testCase.expectedResponse);
  });
});