import jwt from 'jsonwebtoken';

export function verifyAdminToken(request) {
  const authHeader = request.headers.get('authorization') || request.headers.get('Authorization');
  if (!authHeader) {
    return { error: 'No authorization token provided', status: 401 };
  }

  // Token might be sent as "Bearer <token>" or bare "<token>"
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : authHeader.trim();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { adminId: decoded.id };
  } catch {
    return { error: 'Invalid or expired token', status: 401 };
  }
}

