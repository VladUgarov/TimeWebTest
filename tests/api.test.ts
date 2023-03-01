import { test, expect } from '@playwright/test';

test.describe("API Task", () => {
    const baseUrl = "https://api.timeweb.cloud"
    test("Checking my project name ", async ({request}) => {
        const response = await request.fetch(`${baseUrl}/api/v1/projects`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjFrYnhacFJNQGJSI0tSbE1xS1lqIn0.eyJ1c2VyIjoiY3g5MzIzMCIsInR5cGUiOiJhcGlfa2V5IiwicG9ydGFsX3Rva2VuIjoiNjM5MjM2NjQtZjlkMi00MjhkLWE2YWUtMDQ0MmNhZWE1YzY4IiwiYXBpX2tleV9pZCI6ImQ2ODBjYmJlLTdjNTItNGQzYS1hNmU3LTQzOTQzMjg2OWIwNCIsImlhdCI6MTY3NzY5NjQ1Mn0.um9ckQBQ5OsOVW84aiyq0mc8WQyEYKfxRzMfrqfXOeJxXXetxum6ExlIyK3cWszYbfJluSq_GVCefw1co35TQF6usgR9olD9ZSpDItn8Ogf0vEZufvLQ2LJ4pF9JrbioVaioZWK2uM4ljXWKhGDDqgi6SyfhFgXzfMcuP6q6DAxWHkoEEew1xarQOUL5hErcOXIyTKTcnRwweU6dI3PgGC1A5d2hVbgWgi8G0N9AqI0-DA-vgSe2z0XrYCVY_bDT1qHKa7lLoCQCxxYfgGD-pJLxnfVt-aDHF3YGYRT2pMuLSCqCn5AmhpfQ1okjTNaC-yAFfgr61BdS8T5iQC3q8vgRL-U0GddjBtkMIXOdJuWmvDDEf44DTna6qSl6gEyDcgaouCXqpZVOBdWjR1cTXUDCB1QjPqTbuMWBH1r3fRHFUYrNAdW_4ma4KI3QydTNEIi4thCDE9vCU5MBDEXHMFGrBhDDHe9nmSo-uOy9gYeiHKBEDU9zLE2NJ6aUqeBJ'
            }
        });
        const responseBody:object = JSON.parse(await response.text());
        // @ts-ignore
        const nameProject:string = responseBody.projects[0].name;
        expect(nameProject).toBe("Общий проект");
    })
})

