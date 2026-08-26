<?php
// ====================================================================
// Chartered Growth Consultants FZCO - PHP HTML Email Handler
// Styled to match CGC Deep Navy & Gold Corporate Aesthetics
// ====================================================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    echo json_encode(['success' => false, 'error' => 'Invalid JSON payload']);
    exit;
}

// Extract variables with fallback field name support
$fullName = !empty($data['fullName']) ? htmlspecialchars(strip_tags($data['fullName'])) : (!empty($data['name']) ? htmlspecialchars(strip_tags($data['name'])) : '');
$companyName = !empty($data['companyName']) ? htmlspecialchars(strip_tags($data['companyName'])) : (!empty($data['company']) ? htmlspecialchars(strip_tags($data['company'])) : 'N/A');
$rawEmail = !empty($data['email']) ? trim($data['email']) : '';
$email = filter_var($rawEmail, FILTER_VALIDATE_EMAIL) ? $rawEmail : '';
$phone = !empty($data['phone']) ? htmlspecialchars(strip_tags($data['phone'])) : '';
$service = !empty($data['service']) ? htmlspecialchars(strip_tags($data['service'])) : (!empty($data['serviceInterest']) ? htmlspecialchars(strip_tags($data['serviceInterest'])) : 'Corporate Advisory Inquiry');
$message = !empty($data['message']) ? nl2br(htmlspecialchars(strip_tags($data['message']))) : 'No additional inquiry details provided.';

// Server-Side Input Validation
if (empty($email)) {
    echo json_encode(['success' => false, 'error' => 'Valid business email address is required']);
    exit;
}

$cleanPhoneDigits = preg_replace('/\D/', '', $phone);
if (empty($phone) || strlen($cleanPhoneDigits) < 7) {
    echo json_encode(['success' => false, 'error' => 'Valid phone number with at least 7 digits is required']);
    exit;
}

if (empty($fullName) || strlen(trim($fullName)) < 2) {
    echo json_encode(['success' => false, 'error' => 'Full name is required']);
    exit;
}

// Primary Advisory Desk Recipient
$to = 'kaid@charteredgrowth.ae';

// Subject Line Format: [CGC CORPORATE INQUIRY] Service - Full Name (Company Name)
$subject = "[CGC CORPORATE INQUIRY] $service - $fullName ($companyName)";

date_default_timezone_set('Asia/Dubai');
$timestamp = date('m/d/Y, h:i:s A') . ' GST';

// Pixel-perfect HTML Email Template matching CGC Luxury Deep Navy & Gold Aesthetic
$body = '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Corporate Advisory Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0A1128; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0A1128; padding: 36px 12px;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 640px; background-color: #0F172A; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); border: 1px solid rgba(212, 175, 55, 0.25);">
                    
                    <!-- Card Top Gold Accent Strip -->
                    <tr>
                        <td style="background: linear-gradient(90deg, #D4AF37 0%, #FFF8DC 50%, #D4AF37 100%); height: 5px; font-size: 0; line-height: 0;">&nbsp;</td>
                    </tr>

                    <!-- Card Header -->
                    <tr>
                        <td style="padding: 32px 32px 20px 32px; background-color: #0F172A;">
                            
                            <!-- Badges Header Row -->
                            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="left" valign="middle">
                                        <span style="font-size: 11px; font-weight: 800; color: #D4AF37; letter-spacing: 1.5px; text-transform: uppercase;">
                                            CHARTERED GROWTH CONSULTANTS FZCO
                                        </span>
                                        &nbsp;&nbsp;
                                        <span style="display: inline-block; background-color: rgba(212, 175, 55, 0.15); color: #D4AF37; border: 1px solid rgba(212, 175, 55, 0.3); font-size: 10px; font-weight: 700; padding: 4px 10px; border-radius: 12px; letter-spacing: 0.3px;">
                                            • Web Inquiry Verified
                                        </span>
                                    </td>
                                </tr>
                            </table>

                            <h1 style="margin: 16px 0 6px 0; color: #FFFFFF; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
                                Corporate Consultation Inquiry
                            </h1>
                            <p style="margin: 0; color: #94A3B8; font-size: 13px; font-weight: 400; line-height: 1.5;">
                                Client inquiry transmission received via official CGC Web Desk.
                            </p>
                        </td>
                    </tr>

                    <!-- Service Requested Box -->
                    <tr>
                        <td style="padding: 0 32px 24px 32px;">
                            <div style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(212, 175, 55, 0.25); border-radius: 12px; padding: 16px 20px;">
                                <div style="font-size: 10px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 6px;">
                                    ADVISORY SERVICE REQUESTED
                                </div>
                                <div style="font-size: 16px; font-weight: 800; color: #D4AF37;">
                                    ' . $service . '
                                </div>
                            </div>
                        </td>
                    </tr>

                    <!-- Main Form Details Grid -->
                    <tr>
                        <td style="padding: 0 32px 24px 32px;">
                            
                            <!-- 2-Column Row 1: Full Name & Company Name -->
                            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 14px;">
                                <tr>
                                    <td width="49%" valign="top" style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 14px 16px;">
                                        <div style="font-size: 10px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                                            FULL NAME
                                        </div>
                                        <div style="font-size: 14px; font-weight: 700; color: #FFFFFF; word-break: break-word;">
                                            ' . $fullName . '
                                        </div>
                                    </td>
                                    <td width="2%">&nbsp;</td>
                                    <td width="49%" valign="top" style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 14px 16px;">
                                        <div style="font-size: 10px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                                            COMPANY / ENTITY NAME
                                        </div>
                                        <div style="font-size: 14px; font-weight: 700; color: #FFFFFF; word-break: break-word;">
                                            ' . $companyName . '
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- 2-Column Row 2: Email & Phone -->
                            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 14px;">
                                <tr>
                                    <td width="49%" valign="top" style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 14px 16px;">
                                        <div style="font-size: 10px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                                            BUSINESS EMAIL
                                        </div>
                                        <div style="font-size: 13px; font-weight: 700; word-break: break-all;">
                                            <a href="mailto:' . $email . '" style="color: #D4AF37; text-decoration: none;">' . $email . '</a>
                                        </div>
                                    </td>
                                    <td width="2%">&nbsp;</td>
                                    <td width="49%" valign="top" style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 14px 16px;">
                                        <div style="font-size: 10px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                                            PHONE NUMBER
                                        </div>
                                        <div style="font-size: 13px; font-weight: 700;">
                                            <a href="tel:' . str_replace(' ', '', $phone) . '" style="color: #38BDF8; text-decoration: none;">' . $phone . '</a>
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- Full Width: Detailed Message -->
                            <div style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-left: 4px solid #D4AF37; border-radius: 12px; padding: 16px 18px;">
                                <div style="font-size: 10px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                                    INQUIRY SPECIFICATION / MESSAGE
                                </div>
                                <div style="font-size: 13px; color: #E2E8F0; line-height: 1.6; font-weight: 400;">
                                    ' . $message . '
                                </div>
                            </div>

                        </td>
                    </tr>

                    <!-- Action Button & Footer Strip -->
                    <tr>
                        <td align="center" style="padding: 24px 32px 32px 32px; background-color: #0F172A; border-top: 1px solid rgba(255, 255, 255, 0.05);">
                            
                            <!-- Gold CTA Button -->
                            <a href="mailto:' . $email . '?subject=RE:%20' . rawurlencode($subject) . '" style="display: inline-block; background-color: #D4AF37; color: #0A1128; font-size: 13px; font-weight: 800; text-decoration: none; padding: 12px 28px; border-radius: 8px; letter-spacing: 0.5px; margin-bottom: 18px; text-transform: uppercase; box-shadow: 0 4px 14px rgba(212, 175, 55, 0.3);">
                                ✉ Direct Reply to ' . $fullName . '
                            </a>

                            <p style="margin: 0; color: #64748B; font-size: 11px; font-weight: 500;">
                                Chartered Growth Consultants FZCO • IFZA, Dubai Silicon Oasis • ' . $timestamp . '
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
';

// Linux-compatible RFC 2822 Email Headers using \n for Exim/Sendmail
$headers  = "MIME-Version: 1.0\n";
$headers .= "Content-Type: text/html; charset=UTF-8\n";
$headers .= "From: CGC Advisory Desk <kaid@charteredgrowth.ae>\n";
$headers .= "Reply-To: $fullName <$email>\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\n";

// Execute mail with -f envelope sender parameter for cPanel Exim SPF delivery
$sent = @mail($to, $subject, $body, $headers, "-f kaid@charteredgrowth.ae");

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Consultation inquiry dispatched successfully']);
} else {
    // Fallback attempt without -f if server restricts custom envelope flags
    $sentFallback = mail($to, $subject, $body, $headers);
    if ($sentFallback) {
        echo json_encode(['success' => true, 'message' => 'Consultation inquiry dispatched via fallback']);
    } else {
        echo json_encode(['success' => false, 'error' => 'Server failed to send email. Check cPanel mail configuration.']);
    }
}
?>
