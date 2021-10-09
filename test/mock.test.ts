function once(fn) {
    var returnValue,
        called = false;
    return function () {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}

it("calls the original function", function () {
    const callback = sinon.fake();
    const proxy = once(callback);
    proxy();

    // 原生sinon写法
    expect(callback.called).to.be.ok;
});