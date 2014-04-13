#pragma strict

  var speed : float = 20;
	var jumpSpeed : float = 8.0;
	var gravity : float = 20.0;

	private var moveDirection : Vector3 = Vector3.zero;

	function Update() {
		var controller : CharacterController = GetComponent(CharacterController);
		
			// We are grounded, so recalculate
			// move direction directly from axes
			moveDirection = Vector3(Input.GetAxis("Horizontal"),Input.GetAxis("Vertical"),
			                        0);
			moveDirection = transform.TransformDirection(moveDirection);
			moveDirection *= speed;
			
			
		

		// Apply gravity
		moveDirection.y -= gravity * Time.deltaTime;
		
		// Move the controller
		controller.Move(moveDirection * Time.deltaTime);
	}