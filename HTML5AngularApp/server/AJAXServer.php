<?php
/* ===============================================================================================
 * AJAX Action handler class
 *
 */

class AJAXServer {

    private $debug_mode          = TRUE;

    public function __construct() {

        $response["error"] = -1; // unknown
        $request = $this->valid_request();
        if ($request != NULL) { //Checks if action value exists

            $response = $this->handleAction( $request );

        echo $response;
        return 0;

        }
    }


    public function handleAction( $request ) {

        // OVERRIDE this method with your own handlers
        $response = $request;
        $response['error'] = 0; // All OK

        // must return a JSON string as a response
        return json_encode( $response );
    }


    private function is_ajax() {

        return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
    }


    private function valid_request() {

        $request = NULL;

        // this is geared to JQuery style urlencodes paramaters
        if ($this->is_ajax() || ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST))) {
        	$request = $_POST;
        	
       	} elseif ($_SERVER['REQUEST_METHOD']=="GET" && !empty($_GET)) {        	
        	$request = $_GET;
        		
        } elseif (empty($_POST)) {
        	// this is geared to Angular and data posted via JSON rather than urlencoded
        	// paramaters JQuery style
        	     
        	$request = (array)json_decode(file_get_contents('php://input'), true);
        	$_POST = $request;
        };
        	 
        return $request;
    }


    private function is_error( $error_msg ) {
        /*
         * When we encounter an error the handler should call is error with a message and hand that back
         * as a response to the client
         */

        // Create a response array (attrib => value) with the origingal post params to start
        $response = $_POST;

        // Add our error message
        $response["error"] = $error_msg;

        // convert the whole response to a JSON string, then add that string
        // as another element to the return message
        //
        // This lets us see the data coming back as a string in the debugger
        if ($this->debug_mode) {

            $response["json"] = json_encode( $response );
        }

        // Respond to the client with a JSON string containing attrib => value pairs encoded
        return $response;
    }

}
?>