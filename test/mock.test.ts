import sinon from "sinon";
import sinonChai from "sinon-chai";
chai.use(sinonChai);

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

    // sinon-chai写法
    expect(callback).to.have.been.called;
});