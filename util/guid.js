
/**
 * 唯一id的起始值
 */
var guidIndex = 1;

/**
 * 获取唯一id
 */
function guid() {
    return '_cur_' + (guidIndex++);
}

exports = module.exports = guid;