/*
 * Copyright (c) 2006-2007 Erin Catto http://www.gphysics.com
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */
/*
 * Original Box2D created by Erin Catto
 * http://www.gphysics.com
 * http://box2d.org/
 * 
 * Box2D was converted to Flash by Boris the Brave, Matt Bush, and John Nesky as Box2DFlash
 * http://www.box2dflash.org/
 * 
 * Box2DFlash was converted from Flash to Javascript by Uli Hecht as box2Dweb
 * http://code.google.com/p/box2dweb/
 * 
 * box2Dweb was modified to utilize Google Closure, as well as other bug fixes, optimizations, and tweaks by Illandril
 * https://github.com/illandril/box2dweb-closure
 */
 
 (function(){
    var bouyancyController = new Box2D.Dynamics.Controllers.b2BuoyancyController();
    bouyancyController.offset = -35;
    bouyancyController.density = 4;
    world.AddController(bouyancyController);
    
    var fixDef = new Box2D.Dynamics.b2FixtureDef();
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;
    fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape();
    fixDef.shape.SetAsBox(22.5, 0.2);
    
    var bodyDef = new Box2D.Dynamics.b2BodyDef();
    bodyDef.type = Box2D.Dynamics.b2BodyDef.b2_staticBody;
    bodyDef.position.Set(22.5, 34);
    world.CreateBody(bodyDef).CreateFixture(fixDef);
    
    bodyDef.type = Box2D.Dynamics.b2BodyDef.b2_dynamicBody;
    
    var setup = [];
    var addBody = function() {
        var body = world.CreateBody(bodyDef);
        body.CreateFixture(fixDef);
        bouyancyController.AddBody(body);
        setup.push(body);
        return body;
    };
    
    var minX = 30;
    var minY = 0;
    var randomX = 10;
    var randomY = 14;
    
    window.resetSystem = function() {
        for (var i = 0; i < setup.length; i++) {
            world.DestroyBody(setup[i]);
        }
        setup = [];
        
        fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape();
        fixDef.shape.SetAsBox(0.25, 2);
        bodyDef.position.Set(32, 32);
        addBody();
        
        bodyDef.position.Set(34, 27.5);
        addBody();
        
        bodyDef.position.Set(36, 32);
        addBody();
        
        bodyDef.position.Set(36, 23);
        addBody();
        
        bodyDef.position.Set(38, 27.5);
        addBody();
        
        bodyDef.position.Set(40, 32);
        addBody();
        
        bodyDef.position.Set(40, 23);
        addBody();
        
        bodyDef.position.Set(42, 27.5);
        addBody();

        bodyDef.position.Set(44, 32);
        addBody();
        
        
        fixDef.shape.SetAsBox(2, 0.25);
        bodyDef.position.Set(34, 29.5);
        addBody();
        
        bodyDef.position.Set(36, 25);
        addBody();
        
        bodyDef.position.Set(38, 29.5);
        addBody();
        
        bodyDef.position.Set(38, 20.5);
        addBody();
        
        bodyDef.position.Set(40, 25);
        addBody();
        
        bodyDef.position.Set(42, 29.5);
        addBody();
        
        bodyDef.position.Set(5, 29.5);
        fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape();
        fixDef.shape = new Box2D.Collision.Shapes.b2CircleShape(0.5);
        var launched = addBody();
        launched.ApplyImpulse(new Box2D.Common.Math.b2Vec2(minX + randomX * Math.random(), -1 * (minY + randomY * Math.random())), launched.GetWorldCenter());
    };
    resetSystem();
})();