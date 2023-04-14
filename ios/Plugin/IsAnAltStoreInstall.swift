import Foundation

@objc public class IsAnAltStoreInstall: NSObject {
    
    @objc public func isAltStoreInstallation() -> Bool {
        let urlSchemePrefix = "altstore-" 
        var urlSchemeFound = false
        
        if let urlTypes = Bundle.main.infoDictionary?["CFBundleURLTypes"] as? [[String: Any]] {
            for urlType in urlTypes {
                if let urlSchemes = urlType["CFBundleURLSchemes"] as? [String] {
                    for urlScheme in urlSchemes {
                        if urlScheme.hasPrefix(urlSchemePrefix) {
                            urlSchemeFound = true
                            break
                        }
                    }
                }
                if urlSchemeFound {
                    break
                }
            }
        }
        
        return urlSchemeFound
    }
}