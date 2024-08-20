import Email from "../../components/contact/sendEmail";

test("when receiving a with an empty string", () => {
  const emailConst = new Email("", "", "message");
  return emailConst.sendEmail().then((returnMessage) => {
    expect(returnMessage).toBe("There can be no empty space");
  });
});

test("all functions work together", () => {
  const emailConst = new Email("teste", "teste@teste.com", "message");
  return emailConst.sendEmail().then((returnMessage) => {
    expect(returnMessage).toBe("Sent");
  });
});
