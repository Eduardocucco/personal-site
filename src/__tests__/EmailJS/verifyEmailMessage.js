import Email from "../../components/contact/sendEmail";

test("if verifyEmailMessage detect a null name", () => {
  const emailConst = new Email(null, "teste@teste.com", undefined);
  expect(emailConst.verifyEmailMessage()).toBe(false);
});
test("if verifyEmailMessage detect an empty string", () => {
  const emailConst = new Email("teste", "teste@teste.com", "");
  expect(emailConst.verifyEmailMessage()).toBe(false);
});
test("if verifyEmailMessage detect a null value", () => {
  const emailConst = new Email("teste", null, "message");
  expect(emailConst.verifyEmailMessage()).toBe(false);
});
test("if verifyEmailMessage detect an undefined", () => {
  const emailConst = new Email("teste", "teste@teste.com", undefined);
  expect(emailConst.verifyEmailMessage()).toBe(false);
});
test("if verifyEmailMessage detect is valid", () => {
  const emailConst = new Email("teste", "teste@teste.com", "message");
  expect(emailConst.verifyEmailMessage()).toBe(true);
});
