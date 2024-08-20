import Email from "../../components/contact/sendEmail";

test("normal email send process", () => {
  const emailConst = new Email("test", "test@test.com", "message");
  return emailConst
    .sendToEmailJS()
    .then((response) => {
      expect(response.status).toBe(200);
    })
    .catch(() => {
      throwError();
    });
});

test("if detect a problem in the service key", () => {
  process.env.REACT_APP_SERVICE = "qwerty";
  const emailConst = new Email("test", "test@test.com", "message");
  return emailConst
    .sendToEmailJS()
    .then(() => {
      throwError();
    })
    .catch((response) => {
      expect(response.status).toBe(400);
    });
});
