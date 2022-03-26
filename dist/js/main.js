'use strict';

function _instanceof(value, type) {
    return type != null && typeof Symbol !== "undefined" && type[Symbol.hasInstance] ? !!type[Symbol.hasInstance](value) : value instanceof type;
}

var File = function File(url, obj) {
    File.list = Array.isArray(File.list) ? File.list : [];
    File.progress = File.progress || 0;
    this.progress = 0;
    this.object = obj;
    this.url = url;
};

File.indexOf = function (file) {
    for (var index in File.list) {
        var file1 = File.list[index];
        if (file1.equals(file) || file1.url === file || file1.object === file) return index;
    }
    return -1;
};

File.find = function (entry) {
    var found = File.indexOf(entry);
    return ~found && File.list[found];
};

File.prototype.equals = function (file) {
    var isFile = _instanceof(file, File);
    return isFile && this.url === file.url && this.object === file.object;
};

File.prototype.save = function (update) {
    update = typeof update === "undefined" ? true : update;
    if (Array.isArray(File.list)) {
        var index = File.indexOf(this);
        if (~index && update) {
            File.list[index] = this;
            console.warn('File `%s` has been loaded before and updated now for: %O.', this.url, this);
        } else {
            File.list.push(this);
        }
        console.log(File.list);
    } else {
        File.list = [this];
    }
    return this;
};
