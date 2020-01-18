test("smoke", function() {
  const result = require("..");

  expect(result).toMatchInlineSnapshot(`
    Object {
      "config": Object {
        "recommended": Object {
          "version": Object {
            "error": Object {
              "status": "maintained",
            },
            "warning": Object {
              "status": "lts_active",
            },
          },
        },
        "strict": Object {
          "version": Object {
            "error": Object {
              "status": "lts_active",
            },
          },
        },
      },
      "rules": Object {
        "version": Object {
          "evaluate": [Function],
          "fetch": [Function],
        },
      },
    }
  `);
});
