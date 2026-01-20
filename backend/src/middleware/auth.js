import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const header = req.headers.authorization;
  console.log("AUTH HEADER:", header);
  if (!header) {
    req.user = null;
    return next();
  }
  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("JWT DECODED PAYLOAD:", decoded);
    req.user = decoded;
    next();
  } 
  catch (e) {
    console.log("JWT VERIFY ERROR:", e.message);
    req.user = null;
    next();
  }
}

