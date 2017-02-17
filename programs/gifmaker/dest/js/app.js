(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
exports.canvasDom = document.getElementById('canvas');
exports.ctx = exports.canvasDom.getContext('2d');
exports.prevBtn = document.getElementById('prev');
exports.nextBtn = document.getElementById('next');
exports.lineWidthDom = document.getElementById('style');
exports.colorDom = document.getElementById('color');
exports.naviDom = document.getElementById('navigation');
exports.imagesContainer = document.getElementById('back-images-container');
exports.previousImage = document.getElementById('previous-image');
exports.nextImage = document.getElementById('next-image');
exports.previewGIFBtn = document.getElementById('previewBtn');
exports.previewMaskDiv = document.getElementById('preview-section');
exports.previewGIFImg = document.getElementById('gif-image');

},{}],2:[function(require,module,exports){
"use strict";
var domeles_1 = require("./domelements/domeles");
var endrawable_1 = require("./modules/endrawable");
var resize_window_1 = require("./modules/resize-window");
var dom_events_1 = require("./modules/dom-events");
var draw_background_1 = require("./modules/draw-background");
var set_dom_style_1 = require("./modules/set-dom-style");
var AppLaunch = (function () {
    function AppLaunch() {
    }
    AppLaunch.main = function () {
        var resizeCanvas = new resize_window_1.ResizeWindow();
        var endrawAble = new endrawable_1.EnDrawable(domeles_1.canvasDom, domeles_1.ctx);
        var domEvents = new dom_events_1.DomEvents();
        set_dom_style_1.SetDomStyle.setAll();
        draw_background_1.drawBackground.run();
        endrawAble.setEnable();
        domEvents.run();
    };
    return AppLaunch;
}());
exports.AppLaunch = AppLaunch;
AppLaunch.main();

},{"./domelements/domeles":1,"./modules/dom-events":3,"./modules/draw-background":4,"./modules/endrawable":6,"./modules/resize-window":12,"./modules/set-dom-style":13}],3:[function(require,module,exports){
"use strict";
var domeles_1 = require("../domelements/domeles");
var making_handle_1 = require("./making-handle");
var raw_gif_1 = require("./raw-gif");
var draw_current_1 = require("./draw-current");
var generate_gif_1 = require("./generate-gif");
var DomEvents = (function () {
    function DomEvents() {
    }
    DomEvents.prototype.run = function () {
        this.nextBtnEve(domeles_1.nextBtn);
        this.previousBtnEve(domeles_1.prevBtn);
        this.previewGIF();
    };
    DomEvents.prototype.nextBtnEve = function (nextBtn) {
        nextBtn.onclick = function (e) {
            console.log('next..save pic to obj');
            making_handle_1.MakingHandle.nextEvent();
            console.log('save to obj: ', raw_gif_1.rawGif);
            raw_gif_1.rawGif.nextCurrentPic();
            console.log('current pic: ', raw_gif_1.rawGif.currentPicNum, '\n draw current pic');
            draw_current_1.DrawCurrent.draw(raw_gif_1.rawGif);
        };
    };
    DomEvents.prototype.previousBtnEve = function (prevBtn) {
        prevBtn.onclick = function (e) {
            console.log('next..save pic to obj');
            making_handle_1.MakingHandle.previousEvent();
            console.log('save to obj: ', raw_gif_1.rawGif);
            raw_gif_1.rawGif.prevCurrentPic();
            console.log('current pic: ', raw_gif_1.rawGif.currentPicNum, '\n draw current pic');
            draw_current_1.DrawCurrent.draw(raw_gif_1.rawGif);
        };
    };
    DomEvents.prototype.previewGIF = function () {
        domeles_1.previewGIFBtn.onclick = function (e) {
            domeles_1.previewMaskDiv.style.visibility = 'visible';
            domeles_1.previewMaskDiv.style.opacity = '1';
            generate_gif_1.GenerateGIF.createGIF(raw_gif_1.rawGif, function (blob) {
                var fr = new FileReader();
                fr.readAsDataURL(blob);
                fr.onload = function (data) {
                    domeles_1.previewGIFImg.src = data.target.result;
                };
                console.log();
            });
        };
        domeles_1.previewMaskDiv.onclick = function (e) {
            this.style.opacity = '0';
            this.style.visibility = 'hidden';
            domeles_1.previewGIFImg.src = '';
        };
    };
    return DomEvents;
}());
exports.DomEvents = DomEvents;

},{"../domelements/domeles":1,"./draw-current":5,"./generate-gif":7,"./making-handle":9,"./raw-gif":11}],4:[function(require,module,exports){
"use strict";
var domeles_1 = require("../domelements/domeles");
var watch_1 = require("./watch");
var raw_gif_1 = require("./raw-gif");
var DrawBackground = (function () {
    function DrawBackground() {
    }
    DrawBackground.prototype.run = function () {
        var _this = this;
        watch_1.$watch(raw_gif_1.rawGif, 'currentPicNum', function (obj) {
            console.log('watch', obj);
            _this.draw(raw_gif_1.rawGif);
        });
    };
    DrawBackground.prototype.draw = function (rawGif) {
        var previouNum = rawGif.currentPicNum - 1;
        var nextNum = rawGif.currentPicNum + 1;
        rawGif.pics[previouNum] && (domeles_1.previousImage.src = rawGif.pics[previouNum].pic);
        rawGif.pics[nextNum] && (domeles_1.nextImage.src = rawGif.pics[nextNum].pic);
    };
    return DrawBackground;
}());
exports.DrawBackground = DrawBackground;
exports.drawBackground = new DrawBackground();

},{"../domelements/domeles":1,"./raw-gif":11,"./watch":14}],5:[function(require,module,exports){
"use strict";
var image_handle_1 = require("./image-handle");
var domeles_1 = require("../domelements/domeles");
var DrawCurrent = (function () {
    function DrawCurrent() {
    }
    DrawCurrent.draw = function (rawGif) {
        var picInfo = rawGif.pics[rawGif.currentPicNum];
        if (picInfo) {
            image_handle_1.ImageHandle.drawImage(domeles_1.canvasDom, domeles_1.ctx, picInfo.pic);
        }
    };
    return DrawCurrent;
}());
exports.DrawCurrent = DrawCurrent;

},{"../domelements/domeles":1,"./image-handle":8}],6:[function(require,module,exports){
"use strict";
var painterstyles_1 = require("./painterstyles");
var EnDrawable = (function () {
    function EnDrawable(canvasDom, ctx) {
        this.canvasDom = canvasDom;
        this.canvasPos = [canvasDom.offsetLeft, canvasDom.offsetTop];
        this.ctx = ctx;
    }
    EnDrawable.prototype.setEnable = function () {
        var _this = this;
        this.canvasDom.ontouchstart = function (eve) {
            var posX = eve.changedTouches[0].clientX - _this.canvasPos[0];
            var posY = eve.changedTouches[0].clientY - _this.canvasPos[1];
            _this.crtMouse = [posX, posY];
            _this.drawStart([posX, posY]);
        };
        this.canvasDom.ontouchmove = function (eve) {
            eve.preventDefault();
            var toX = eve.changedTouches[0].clientX - _this.canvasPos[0];
            var toY = eve.changedTouches[0].clientY - _this.canvasPos[1];
            _this.drawIng([toX, toY]);
        };
        return this;
    };
    EnDrawable.prototype.drawStart = function (pos) {
        this.ctx.beginPath();
        this.ctx.lineWidth = painterstyles_1.painter.painterWidth;
        this.ctx.strokeStyle = painterstyles_1.painter.painterColor;
        this.ctx.moveTo(pos[0], pos[1]);
        console.log('move to', pos);
        return this;
    };
    EnDrawable.prototype.drawIng = function (pos) {
        console.log('ing to ', pos);
        this.ctx.lineTo(pos[0], pos[1]);
        this.ctx.stroke();
        return this;
    };
    return EnDrawable;
}());
exports.EnDrawable = EnDrawable;

},{"./painterstyles":10}],7:[function(require,module,exports){
"use strict";
var domeles_1 = require("../domelements/domeles");
var GenerateGIF = (function () {
    function GenerateGIF() {
    }
    GenerateGIF.createGIF = function (rawGif, cb) {
        var sampleImg = new Image();
        sampleImg.src = rawGif.pics[0].pic;
        var picsWidth = sampleImg.naturalWidth;
        var picsHeight = sampleImg.naturalHeight;
        domeles_1.previewGIFImg.width = picsWidth;
        domeles_1.previewGIFImg.height = picsHeight;
        var fr = new FileReader();
        var gif = new GIF({
            workers: 2,
            quality: 10,
            width: picsWidth,
            height: picsHeight,
            workerScript: './dest/js/dist/gif.worker.js'
        });
        for (var _i = 0, _a = rawGif.pics; _i < _a.length; _i++) {
            var item = _a[_i];
            var imgObj = new Image();
            imgObj.src = item.pic;
            console.log(item.pic, imgObj.naturalWidth, imgObj.naturalHeight);
            gif.addFrame(imgObj, { delay: item.duration });
        }
        gif.on('finished', function (blob) {
            cb(blob);
        });
        gif.render();
    };
    return GenerateGIF;
}());
exports.GenerateGIF = GenerateGIF;

},{"../domelements/domeles":1}],8:[function(require,module,exports){
"use strict";
var ImageHandle = (function () {
    function ImageHandle() {
    }
    ImageHandle.getImageBase64 = function (canvasDom, ctx) {
        return canvasDom.toDataURL();
    };
    ImageHandle.drawImage = function (canvasDom, ctx, imageBase64) {
        ImageHandle.clearCanvas(canvasDom, ctx);
        var imgEle = new Image();
        imgEle.src = imageBase64;
        ctx.drawImage(imgEle, 0, 0, canvasDom.offsetWidth, canvasDom.offsetHeight);
    };
    ImageHandle.clearCanvas = function (canvasDom, ctx) {
        ctx.clearRect(0, 0, canvasDom.offsetWidth, canvasDom.offsetHeight);
    };
    return ImageHandle;
}());
exports.ImageHandle = ImageHandle;

},{}],9:[function(require,module,exports){
"use strict";
var domeles_1 = require("../domelements/domeles");
var image_handle_1 = require("./image-handle");
var raw_gif_1 = require("./raw-gif");
var MakingHandle = (function () {
    function MakingHandle() {
    }
    MakingHandle.nextEvent = function () {
        console.log('before next');
        var imgBase64 = image_handle_1.ImageHandle.getImageBase64(domeles_1.canvasDom, domeles_1.ctx);
        if (raw_gif_1.rawGif.currentPicNum >= raw_gif_1.rawGif.pics.length) {
            raw_gif_1.rawGif.addPicture(imgBase64);
        }
        else {
            raw_gif_1.rawGif.changePicture(raw_gif_1.rawGif.currentPicNum, imgBase64);
        }
        image_handle_1.ImageHandle.clearCanvas(domeles_1.canvasDom, domeles_1.ctx);
    };
    MakingHandle.previousEvent = function () {
        var imgBase64 = image_handle_1.ImageHandle.getImageBase64(domeles_1.canvasDom, domeles_1.ctx);
        if (raw_gif_1.rawGif.currentPicNum >= raw_gif_1.rawGif.pics.length) {
            raw_gif_1.rawGif.addPicture(imgBase64);
        }
        else {
            raw_gif_1.rawGif.changePicture(raw_gif_1.rawGif.currentPicNum, imgBase64);
        }
        image_handle_1.ImageHandle.clearCanvas(domeles_1.canvasDom, domeles_1.ctx);
    };
    return MakingHandle;
}());
exports.MakingHandle = MakingHandle;

},{"../domelements/domeles":1,"./image-handle":8,"./raw-gif":11}],10:[function(require,module,exports){
"use strict";
var domeles_1 = require("../domelements/domeles");
var PainterStyles = (function () {
    function PainterStyles() {
        this.painterColor = '#AAAAAA';
        this.painterWidth = 1;
        this.changeColor();
        this.changeWidth();
    }
    PainterStyles.prototype.changeColor = function () {
        var _this = this;
        domeles_1.colorDom.onclick = function (e) {
            var color = e.target;
            if (color.getAttribute('val')) {
                _this.painterColor = color.getAttribute('val');
                console.log(_this.painterColor);
            }
        };
    };
    PainterStyles.prototype.changeWidth = function () {
        var _this = this;
        domeles_1.lineWidthDom.onclick = function (e) {
            var lineWidth = e.target;
            if (lineWidth.getAttribute('val')) {
                _this.painterWidth = Number(lineWidth.getAttribute('val'));
                console.log(_this.painterWidth);
            }
        };
    };
    return PainterStyles;
}());
exports.painter = new PainterStyles();

},{"../domelements/domeles":1}],11:[function(require,module,exports){
"use strict";
var RawGif = (function () {
    function RawGif() {
        console.log('rawGif obj constructing');
        this.pics = [];
        this.currentPicNum = 0;
    }
    RawGif.prototype.addPicture = function (base64, duration) {
        if (duration === void 0) { duration = 40; }
        this.pics.push({ pic: base64, duration: duration });
    };
    RawGif.prototype.changePicture = function (picNum, base64, duration) {
        if (duration === void 0) { duration = 40; }
        this.pics[picNum].pic = base64;
        this.pics[picNum].duration = duration;
    };
    RawGif.prototype.changeCurrentPic = function (picNum) {
        if (picNum <= this.pics.length && picNum >= 0) {
            this.currentPicNum = picNum;
        }
        return this.currentPicNum;
    };
    RawGif.prototype.nextCurrentPic = function () {
        return this.changeCurrentPic(this.currentPicNum + 1);
    };
    RawGif.prototype.prevCurrentPic = function () {
        return this.changeCurrentPic(this.currentPicNum - 1);
    };
    return RawGif;
}());
exports.RawGif = RawGif;
exports.rawGif = new RawGif();

},{}],12:[function(require,module,exports){
"use strict";
var domeles_1 = require("../domelements/domeles");
var ResizeWindow = (function () {
    function ResizeWindow() {
        var windowWidth = document.documentElement.clientWidth;
        var windowHeigt = document.documentElement.clientHeight;
        this.windowSize = { x: windowWidth, y: windowHeigt };
        var naviWidth = domeles_1.naviDom.offsetWidth;
        var naviHeight = domeles_1.naviDom.offsetHeight;
        this.naviDom = { width: naviWidth, height: naviHeight };
        this.setCanvasSize();
        this.setImagesContainerSize();
    }
    ResizeWindow.prototype.setCanvasSize = function () {
        console.time('reset canvas size');
        domeles_1.canvasDom.width = this.windowSize.x;
        domeles_1.canvasDom.height = this.windowSize.y - domeles_1.naviDom.offsetHeight;
        console.timeEnd('reset canvas size');
    };
    ResizeWindow.prototype.setImagesContainerSize = function () {
        domeles_1.imagesContainer.style.width = this.windowSize.x + 'px';
        domeles_1.imagesContainer.style.height = this.windowSize.y - domeles_1.naviDom.offsetHeight + 'px';
    };
    return ResizeWindow;
}());
exports.ResizeWindow = ResizeWindow;

},{"../domelements/domeles":1}],13:[function(require,module,exports){
"use strict";
var domeles_1 = require("../domelements/domeles");
var domeles_2 = require("../domelements/domeles");
var SetDomStyle = (function () {
    function SetDomStyle() {
    }
    SetDomStyle.setColorDom = function () {
        var listDoms = domeles_1.colorDom.children[1].children;
        for (var i = 0; i < listDoms.length; i++) {
            var colorDom_1 = listDoms[i];
            colorDom_1.style.backgroundColor = colorDom_1.getAttribute('val');
        }
    };
    SetDomStyle.setWidthDom = function () {
        var listDoms = domeles_2.lineWidthDom.children[1].children;
        for (var i = 0; i < listDoms.length; i++) {
            var colorDom_2 = listDoms[i].children[0];
            colorDom_2.style.fontSize = Number(listDoms[i].getAttribute('val')) * 5 + 'px';
        }
    };
    SetDomStyle.setAll = function () {
        SetDomStyle.setColorDom();
        SetDomStyle.setWidthDom();
    };
    return SetDomStyle;
}());
exports.SetDomStyle = SetDomStyle;

},{"../domelements/domeles":1}],14:[function(require,module,exports){
"use strict";
var Watch = (function () {
    function Watch() {
    }
    Watch.prototype.addAttrs = function (obj, attrName, cb) {
        var fakeName = "_fake_" + attrName;
        obj[fakeName] = obj[attrName];
        Object.defineProperty(obj, fakeName, {
            enumerable: false
        });
        Object.defineProperty(obj, attrName, {
            get: function () {
                return obj[fakeName];
            },
            set: function (val) {
                obj[fakeName] = val;
                cb.call(obj, obj);
                return obj[fakeName];
            }
        });
        return this;
    };
    return Watch;
}());
exports.$watch = new Watch().addAttrs;

},{}]},{},[2])