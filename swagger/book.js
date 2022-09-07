/**
 * @swagger
 *  /books:
 *    get:
 *      summary: Hamma kitoblarni olib kelish
 *      description: Get All Books
 *      responses:
 *        200:
 *          description: Do'kondagi kitoblar
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  books:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           description: Kitobni id si (Auto generate)
 *                           example: d4f439e4-e936-48a0-94a7-13d1eab9de8e
 *                         name:
 *                           type: string
 *                           description: Kitobni nomi (Auto generate)
 *                           example: Ikki eshik orasi
 *                         author:
 *                           type: string
 *                           description: Author nomi (Auto generate)
 *                           example: O'tkir Hoshimov
 *                         price:
 *                           type: number
 *                           description: Kitobni narxi
 *                           example: 20000
 *        404:
 *          description: Error
 *          
 */
