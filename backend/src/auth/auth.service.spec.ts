import { AuthService } from './auth.service'

describe('AuthService', () => {
  let authService: AuthService
  const originalEnv = { ...process.env }

  beforeEach(() => {
    process.env = {
      ACCESS_ALGORITHM: 'HS256',
      ACCESS_SECRET: 'supersecretkey',
      ACCESS_ISSUER: 'test-issuer',
      ACCESS_EXPIRES_IN: '3600',
      REFRESH_ALGORITHM: 'HS512',
      REFRESH_SECRET: 'supersecretrefreshkey',
      REFRESH_ISSUER: 'refresh-issuer',
      REFRESH_EXPIRES_IN: '86400',
    }
  })

  afterAll(() => {
    process.env = originalEnv
  })

  describe('generateJwtPair functionality', () => {
    beforeEach(() => {
      authService = new AuthService()
    })

    it('should throw error when data is empty', () => {
      expect(() =>
        authService.generateJwtPair(null),
      ).toThrowError(
        'can not generate token pairs when data is empty or undefined',
      )
    })

    it('should throw error when data is undefined', () => {
      expect(() =>
        authService.generateJwtPair(undefined),
      ).toThrowError(
        'can not generate token pairs when data is empty or undefined',
      )
    })
  })

  describe('environment variables validation', () => {
    describe('ACCESS token variables', () => {
      it('should throw error when ACCESS_ALGORITHM is empty', () => {
        delete process.env.ACCESS_ALGORITHM
        expect(() => new AuthService()).toThrowError(
          'ACCESS_ALGORITHM can not be empty',
        )
      })

      it('should throw error when ACCESS_ALGORITHM is invalid', () => {
        process.env.ACCESS_ALGORITHM = 'INVALID_ALG'
        expect(() => new AuthService()).toThrowError(
          'ACCESS_ALGORITHM is not corrected, watch docs please',
        )
      })

      it('should throw error when ACCESS_SECRET is empty', () => {
        delete process.env.ACCESS_SECRET
        expect(() => new AuthService()).toThrowError(
          'ACCESS_SECRET can not be empty',
        )
      })

      it('should throw error when ACCESS_SECRET is short', () => {
        process.env.ACCESS_SECRET = 'short'
        expect(() => new AuthService()).toThrowError(
          'ACCESS_SECRET is short',
        )
      })

      it('should throw error when ACCESS_ISSUER is empty', () => {
        delete process.env.ACCESS_ISSUER
        expect(() => new AuthService()).toThrowError(
          'ACCESS_ISSUER can not be empty',
        )
      })

      it('should throw error when ACCESS_EXPIRES_IN is not a number', () => {
        process.env.ACCESS_EXPIRES_IN = 'invalid'
        expect(() => new AuthService()).toThrowError(
          'ACCESS_EXPIRES_IN must be a number',
        )
      })

      it('should throw error when ACCESS_EXPIRES_IN is not an integer', () => {
        process.env.ACCESS_EXPIRES_IN = '3600.5'
        expect(() => new AuthService()).toThrowError(
          'ACCESS_EXPIRES_IN must be an integer',
        )
      })

      it('should throw error when ACCESS_EXPIRES_IN is zero', () => {
        process.env.ACCESS_EXPIRES_IN = '0'
        expect(() => new AuthService()).toThrowError(
          'ACCESS_EXPIRES_IN must be greater than 0',
        )
      })

      it('should throw error when ACCESS_EXPIRES_IN is negative', () => {
        process.env.ACCESS_EXPIRES_IN = '-10'
        expect(() => new AuthService()).toThrowError(
          'ACCESS_EXPIRES_IN must be greater than 0',
        )
      })
    })

    describe('REFRESH token variables', () => {
      it('should throw error when REFRESH_ALGORITHM is empty', () => {
        delete process.env.REFRESH_ALGORITHM
        expect(() => new AuthService()).toThrowError(
          'REFRESH_ALGORITHM can not be empty',
        )
      })

      it('should throw error when REFRESH_ALGORITHM is invalid', () => {
        process.env.REFRESH_ALGORITHM = 'INVALID_ALG'
        expect(() => new AuthService()).toThrowError(
          'REFRESH_ALGORITHM is not corrected, watch docs please',
        )
      })

      it('should throw error when REFRESH_SECRET is empty', () => {
        delete process.env.REFRESH_SECRET
        expect(() => new AuthService()).toThrowError(
          'REFRESH_SECRET can not be empty',
        )
      })

      it('should throw error when REFRESH_SECRET is short', () => {
        process.env.REFRESH_SECRET = 'short'
        expect(() => new AuthService()).toThrowError(
          'REFRESH_SECRET is short',
        )
      })

      it('should throw error when REFRESH_ISSUER is empty', () => {
        delete process.env.REFRESH_ISSUER
        expect(() => new AuthService()).toThrowError(
          'REFRESH_ISSUER can not be empty',
        )
      })

      it('should throw error when REFRESH_EXPIRES_IN is not a number', () => {
        process.env.REFRESH_EXPIRES_IN = 'invalid'
        expect(() => new AuthService()).toThrowError(
          'REFRESH_EXPIRES_IN must be a number',
        )
      })

      it('should throw error when REFRESH_EXPIRES_IN is not an integer', () => {
        process.env.REFRESH_EXPIRES_IN = '86400.5'
        expect(() => new AuthService()).toThrowError(
          'REFRESH_EXPIRES_IN must be an integer',
        )
      })

      it('should throw error when REFRESH_EXPIRES_IN is zero', () => {
        process.env.REFRESH_EXPIRES_IN = '0'
        expect(() => new AuthService()).toThrowError(
          'REFRESH_EXPIRES_IN must be greater than 0',
        )
      })

      it('should throw error when REFRESH_EXPIRES_IN is negative', () => {
        process.env.REFRESH_EXPIRES_IN = '-10'
        expect(() => new AuthService()).toThrowError(
          'REFRESH_EXPIRES_IN must be greater than 0',
        )
      })

      it('should throw error when REFRESH_EXPIRES_IN <= ACCESS_EXPIRES_IN', () => {
        process.env.ACCESS_EXPIRES_IN = '3600'
        process.env.REFRESH_EXPIRES_IN = '3600'
        expect(() => new AuthService()).toThrowError(
          'REFRESH_EXPIRES_IN must be greater than ACCESS_EXPIRES_IN',
        )

        process.env.REFRESH_EXPIRES_IN = '3599'
        expect(() => new AuthService()).toThrowError(
          'REFRESH_EXPIRES_IN must be greater than ACCESS_EXPIRES_IN',
        )
      })
    })
  })
})
