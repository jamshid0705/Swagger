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
 *          summary: Not found!
 *          description: Error
 */


/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
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
 */

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                  type: string
 *                  description: Kitobni nomi (Auto generate)
 *                  example: Ikki eshik orasi
 *               author:
 *                  type: string
 *                  description: Author nomi (Auto generate)
 *                  example: O'tkir Hoshimov
 *               price:
 *                  type: number
 *                  description: Kitobni narxi
 *                  example: 20000
 *     responses:
 *       201:
 *          description: Qo'shish
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
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
 *        
*/


/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Kitoblarni olib tashlash
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *          description: Kitob olib tashlandi
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
 */



/**
 * @swagger
 * /books/{id}:
 *   patch:
 *     summary: Kitoblarni olib tashlash
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                  type: string
 *                  description: Kitobni nomi (Auto generate)
 *                  example: Ikki eshik orasi
 *               author:
 *                  type: string
 *                  description: Author nomi (Auto generate)
 *                  example: O'tkir Hoshimov
 *               price:
 *                  type: number
 *                  description: Kitobni narxi
 *                  example: 20000
 * 
 *     responses:
 *       200:
 *          description: Kitob olib tashlandi
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
 */



