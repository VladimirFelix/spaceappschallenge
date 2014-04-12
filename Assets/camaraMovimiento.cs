using UnityEngine;
using System.Collections;

public class camaraMovimiento : MonoBehaviour {

	Transform player;
	// Use this for initialization
	void Start () {
		GameObject player_go = GameObject.FindGameObjectsWithTag ("Player");

		if (player_go == null) {
			Debug.LogError("No se pudo encontrar jugador!");
			return;
		}
		player = player_go.transform;		
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
