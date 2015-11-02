<?php
include '../AJAXServer.php';

class Server extends AJAXServer {
	// ========================================================================
	//
	// MAIN Handler to process POST requests
	//

	public function handleAction( $request ) {

		// The 'action' requested is named for the folder this server lives in
		// no data to handle here, just the user is logged out.
	
		// perhaps close the db connection
		$response["error"] = 0;

		return json_encode( $response );
	}
}

$myServer = new Server();
?>