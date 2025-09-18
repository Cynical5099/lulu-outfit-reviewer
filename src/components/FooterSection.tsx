import { Shield } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Trust Elements */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield size={20} className="text-trust" />
            <span className="text-trust font-medium">HTTPS Secure</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Applications are handled securely. Product availability may vary. 
            We prioritize your privacy and data protection.
          </p>
        </div>

        {/* Footer Links */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Contact Support
            </a>
          </div>
          
          <div className="text-center text-muted-foreground text-xs">
            <p>&copy; 2024 Lululemon Product Reviewer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;