
export class InvalidCountryCodeError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = InvalidCountryCodeError.name;
    }
}

export class InvalidLanguageCodeError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = InvalidLanguageCodeError.name;
    }
}

export class StationNotFoundError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = StationNotFoundError.name;
    }
}

export class DeviceNotFoundError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = DeviceNotFoundError.name;
    }
}

export class NotSupportedError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = NotSupportedError.name;
    }
}

export class WrongStationError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = WrongStationError.name;
    }
}

export class RTSPPropertyNotEnabledError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = RTSPPropertyNotEnabledError.name;
    }
}

export class InvalidPropertyValueError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = InvalidPropertyValueError.name;
    }
}

export class InvalidCommandValueError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = InvalidCommandValueError.name;
    }
}

export class ReadOnlyPropertyError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = ReadOnlyPropertyError.name;
    }
}

export class LivestreamError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = LivestreamError.name;
    }
}

export class TalkbackError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = TalkbackError.name;
    }
}

export class StationConnectTimeoutError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = StationConnectTimeoutError.name;
    }
}

export class AddUserError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = AddUserError.name;
    }
}

export class DeleteUserError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = DeleteUserError.name;
    }
}

export class UpdateUserUsernameError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = UpdateUserUsernameError.name;
    }
}

export class UpdateUserScheduleError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = UpdateUserScheduleError.name;
    }
}

export class UpdateUserPasscodeError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = UpdateUserPasscodeError.name;
    }
}

export class PinNotVerifiedError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = PinNotVerifiedError.name;
    }
}