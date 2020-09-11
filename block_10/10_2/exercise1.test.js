const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it('uppercase teste equal TESTE', done => {
  uppercase('teste', (str) => {
    expect(str).toBe('TESTE');
    done();
  });
});