<?php

include_once 'Database.php';

// Adapt to your Table
class DatabaseTable {

	function create( $data ){

		$db = Database::connection();

		$params = array(
            ':id'             =>$data['id']
            ':name'           =>$data['name'],
		    ':wholesale_price'=>$data['wholesale_price'],
		    ':retail_price'   =>$data['retail_price'],
		    ':quantity'       =>$data['quantity'],
		    ':box_id'         =>$data['box_id'],
		    ':id'             =>$data['id']
		);

		$db->prepare("INSERT INTO products(id, name, wholesale_price, retail_price, quantity, box_id)
		  			              VALUES ( NULL, :name, :wholesale_price, :retail_price, :quantity, :box_id)");
		if(!$db->execute())
		{
			return $db->errorCode();
		}

		return true;

	}


	function update($data){

		$db = Database::connection();

		$params = array(
            ':id'             =>$data['id']
            ':name'           =>$data['name'],
		    ':wholesale_price'=>$data['wholesale_price'],
		    ':retail_price'   =>$data['retail_price'],
		    ':quantity'       =>$data['quantity'],
		    ':box_id'         =>$data['box_id'],
		    ':id'             =>$data['id']
		);
		$db->prepare('UPDATE databasetable
		                  SET name = :name,
		                      wholesale_price = :wholesale_price,
		                      retail_price = :retail_price,
					          quantity = :quantity,
		                      box_id = :box_id
						  WHERE id= :id');

		if (!$db->execute( $params )) {

			return $db->errorCode();
		}

		return true;

	}

	function findProductByName($name){

		$handler = EntityManager::get()->prepare("SELECT * FROM products p where p.name LIKE '%".trim($name)."%'");

		$handler->execute();

		$result = $handler->fetchAll(\PDO::FETCH_OBJ);

		if(empty($result)) $result[]["name"] = "No product found";

		return $result;

	}

	function findProductByID($id){

		$handler = EntityManager::get()->prepare("SELECT * FROM products p where p.id=".$id);

		$handler->execute();

		$row = $handler->fetch(\PDO::FETCH_OBJ);

		if(!isset($row->id)) $row = "No product found";

		return $row;

	}

}


?>