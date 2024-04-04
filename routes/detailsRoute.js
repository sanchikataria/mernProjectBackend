import express from "express";
import { Details } from "../models/detailsModel.js";

const router= express.Router();

//to save details
router.post('/', async (request, response) => {
    try {
      if (
        !request.body.name ||
        !request.body.phone_number ||
        !request.body.email ||
        !request.body.hobbies
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
      const newDetails = {
        name: request.body.name,
        phone_number: request.body.phone_number,
        email: request.body.email,
        hobbies: request.body.hobbies,
      };
  
      const details = await Details.create(newDetails);
  
      return response.status(201).send(details);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  // Route for Get All details from database

  router.get('/', async (request, response) => {
    try {
      const details = await Details.find({});
  
      return response.status(200).json({
        count: details.length,
        data: details,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  //by id
  router.get('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const details = await Details.findById(id);
  
      return response.status(200).json(details);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  //update details
  router.put('/:id', async (request, response) => {
    try {
      if (
        !request.body.name ||
        !request.body.phone_number ||
        !request.body.email ||
        !request.body.hobbies
      ) {
        return response.status(400).send({
          message: 'Send all required fields: name, phone_number, email, hobbies',
        });
      }
  
      const { id } = request.params;
  
      const result = await Details.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).json({ message: 'Details not found' });
      }
  
      return response.status(200).send({ message: 'Details updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  // to delete  detail
  router.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Details.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Details not found' });
      }
  
      return response.status(200).send({ message: 'Details deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
   export default router;