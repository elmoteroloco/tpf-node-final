export const adminRequired = (req, res, next) => {
    if (req.user && (req.user.admin || req.user.superAdmin)) {
        next();
    } else {
        res.status(403).json({ message: "Acceso denegado. Se requieren permisos de administrador." });
    }
};

export const superAdminRequired = (req, res, next) => {
    if (req.user && req.user.superAdmin) {
        next();
    } else {
        res.status(403).json({ message: "Acceso denegado. Se requieren permisos de superadministrador." });
    }
};
