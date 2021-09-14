<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Branch</th>
                        <th>Address</th>
                    </tr>
                    <xsl:for-each select="students/student">
                        <tr>
                            <td>
                                <xsl:value-of select="name"/>
                            </td>
                            <td>
                                <xsl:value-of select="gender"/>
                            </td>
                            <td>
                                <xsl:value-of select="branch"/>
                            </td>
                            <td>
                                <xsl:value-of select="address"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>