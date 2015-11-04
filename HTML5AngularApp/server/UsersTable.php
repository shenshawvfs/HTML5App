<?php
include_once 'Database.php';

// Adapt to your Table
class UsersTable {

	function create( $data ){

	    $params = $this->setParams( $data );
	    $db = Database::connection();
		$db->prepare("INSERT INTO users(id, lastname, firstname, phone, email, office, title)
		  			              VALUES ( NULL, :lastname, :firstname, :phone, :email, :office, :title)");
		if(!$db->execute( $params )) {
			return $db->errorCode();
		}

		return true;
	}


	function readByEmail( $email ){

		$db = Database::connection();
		$db->prepare("SELECT * FROM users u WHERE u.email LIKE '%".trim($email)."%'");
		$db->execute();

		$result = $db->fetchAll(\PDO::FETCH_OBJ);
		if (empty( $result ))
		    $result[]["name"] = "No product found";

		return $result;
	}


	function readByID( $id ){

		$db = Database::connection();
		$db->prepare("SELECT * FROM users u where u.id=".$id);
		$db->execute();

		$row = $db->fetch(\PDO::FETCH_OBJ);
		if (!isset( $row->id ))
		    $row = "No product found";

		return $row;
	}

	function update( $data ){

		$params = $this->setParams( $data );
	    $db = Database::connection();
		$db->prepare('UPDATE users
		                  SET lastname = :lastname,
		                      firstname = :firstname,
		                      phone = :phone,
					          email = :email,
		                      office = :office,
		                      title = :title
						  WHERE id = :id');

		if (!$db->execute( $params ))
			return $db->errorCode();

		return true;

	}

	private function setParams( $data ) {

	    $params = array(
            ':id'        =>$data['id']
            ':lastname'  =>$data['lastname'],
            ':firstname' =>$data['firstname'],
            ':phone'     =>$data['phone'],
            ':email'     =>$data['email'],
            ':office'    =>$data['office'],
            ':title'     =>$data['title']
	    );
	    return $params;
	}

}


?>