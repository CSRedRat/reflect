function GameScene(){
	this.circle = new createjs.Shape();
	this.circle.graphics.beginFill("red").drawCircle(0, 0, 50);
	this.circle.x = 181;
	this.circle.y = 100;
	this.circle.vx = 150;
	this.circle.vy = 0;	
	this.keys = [];
				
	this.circle.shadow = new createjs.Shadow("#454", 5, 5, 14);
	
	this.back = new createjs.Bitmap( global.preloader.imgs.back );
	
	

}

extend(GameScene,BaseScene);

GameScene.prototype.show = function(){
	$('body').keydown(this.onBodyKeyDown);
	$('body').keyup(this.onBodyKeyUp);
	global.stage.addChildAt(this.back,0);	
	global.stage.addChild(this.circle);
	
	createjs.Ticker.addListener(this);	
}

GameScene.prototype.hide = function(){
	$('body').unbind();
	global.stage.removeChild(this.circle);
	global.stage.removeChild(this.back);
	
	createjs.Ticker.removeListener(this);
	global.camera.setLookAt(0,0);
	global.camera.applyTransform();
	
}

GameScene.prototype.onBodyKeyDown = function(event){
	keys[event.keyCode] = true;	
}
GameScene.prototype.onBodyKeyUp = function(event){
	keys[event.keyCode] = false;
	if (event.keyCode == 27){
		global.sceneController.switchScene(SceneController.eventTypes.MAIN_MENU);
	}
}

GameScene.prototype.tick = function(elapsedTime){	
	this.circle.vy+=400*elapsedTime/1000;

	if (keys[87]){
		this.circle.y-=6;
	}
	if (keys[83]){
		this.circle.y+=6;
	}
	if (keys[65]){
		this.circle.x-=6;
	}
	if (keys[68]){
		this.circle.x+=6;
	}				
	
	global.camera.setLookAt(this.circle.x,this.circle.y);
	global.camera.applyTransform();
	
	
	global.stage.update(elapsedTime);
	
}