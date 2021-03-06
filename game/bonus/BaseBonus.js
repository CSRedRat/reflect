/**
 * @author ProBigi
 */

function BaseBonus()
{
	BaseBonus.superclass.constructor.apply(this);
	
	this.view;
	this.type;
	this.showTime;
}

extend(BaseBonus,createjs.Container);

BaseBonus.prototype.init = function(x,y) { }

BaseBonus.prototype.show = function()
{
	this.view.scaleX = this.view.scaleY = 0;
	var tween = createjs.Tween.get(this.view, {loop:false});	
	tween.to( { scaleX:1, scaleY: 1 },1000,createjs.Ease.bounceOut);
	//.to( { scaleX:1, scaleY: 1 },300)
}

BaseBonus.prototype.hide = function()
{
	createjs.Tween.removeTweens(this.view);
	
	var tween = createjs.Tween.get(this.view, {loop:false});	
	tween.to( { scaleX:0, scaleY: 0 },500,createjs.Ease.bounceIn).call(this.onComplete);
}

BaseBonus.prototype.onComplete = function()
{
	global.BonusFactory.removeBonus(this);
}
